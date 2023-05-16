import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const AppBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((path) => path !== '');

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link to="/">Home</Link>
      </BreadcrumbItem>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return (
          <BreadcrumbItem key={routeTo} active={isLast}>
            {isLast ? (
              name
            ) : (
              <Link to={routeTo}>{name}</Link>
            )}
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
