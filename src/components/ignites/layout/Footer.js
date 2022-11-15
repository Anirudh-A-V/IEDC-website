import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import Logo from './partials/Logo';
// import FooterNav from './partials/FooterNav';
import FooterSocial from '../../layout/partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

const Footer = ({
  className,
  topOuterDivider,
  topDivider,
  ...props
}) => {

  const classes = classNames(
    'site-footer center-content-mobile',
    topOuterDivider && 'has-top-divider',
    className
  );

  return (
    <footer
      {...props}
      className={classes}
    >
      <div className="container" style={{justifyContent: 'center'}}>
        <div className={
          classNames(
            'site-footer-inner',
            topDivider && 'has-top-divider'
          )}>
          <div className="footer-top space-between text-xxs">
            {/* <div className='logo-class'>
              <Logo />
            </div> */}
            <FooterSocial />
          </div>
          {/* <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
          </div> */}
          <div className="footer-copyright text-xxs invert-order-desktop">Made by IEDC CET. All right reserved</div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;