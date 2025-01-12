import React from 'react'
import classNames from 'classnames'
import { SectionTilesProps } from '../../utils/SectionProps'
import SectionHeader from './partials/SectionHeader'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Payment = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  )

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  )

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left')

  const sectionHeader = {
    title: 'Payment Plans',
    paragraph:
      'The cohort will run for a total of 10 weeks! But we understand that there are different needs to every individual. Thus, we have three plans. If you have any questions, we highly recommend to check out the FAQ: ',
    link:
      'https://justinlinpersonal.notion.site/FAQ-0562d2784246493fb183faeeaa70b57c'
  }

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-footer text-xs mb-0 '>
                  <span className='testimonial-item-name text-color-high'>
                    Monthly Basic Plan
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'> $600 a month</a>
                  </span>
                </div>
                {/* div size of .2 rem */}
                <i style={{ fontSize: '0.8rem' }} >
                  This plan is paid on a monthly basis and can stop at any time. For the last 2 weeks of the course, it will be prorated to $300 dollars.
                </i>
                <div>
                  <p className='text-sm mb-0 mt-16'>
                    <li> Two 2-hour lecture a week </li>
                    <li> One 1-hour office hour a week </li>
                    <li> Last two weeks will be prorated </li>
                    {/* Bold text with font of 2 rem */}
                    <li> <b><u>ONE</u></b> 1-1 hour session per month or <b><u>THREE</u></b> for the 10 weeks</li>
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='testimonial-item-footer text-xs mb-0 '>
                  <span className='testimonial-item-name text-color-high'>
                    Advance Plan
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>$1800 for 10 weeks</a>
                  </span>
                </div>
                <i style={{ fontSize: '0.8rem' }} >
                  This plan is 3 months paid in advance, by doing so you get more personal 1-1 sessions!
                </i>
                <div>
                  <p className='text-sm mb-0 mt-16'>
                    <li> Two 2-hour lectures a week </li>
                    <li> One 1-hour lectures a week </li>
                    <li> One 1-hour lectures a week </li>
                    <li> <b><u>SIX</u></b> 1-1 hour session for the 10 weeks</li>
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-left'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='testimonial-item-footer text-xs mb-0 '>
                  <span className='testimonial-item-name text-color-high'>
                    Executive Plan
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>$2300 for 10 weeks</a>
                  </span>
                </div>
                <i style={{ fontSize: '0.8rem' }} >
                  The executive plan is for people who really want strong support every step of the way with instant access and feedback.
                </i>
                <div>
                  <p className='text-sm mb-0'>
                  <p className='text-sm mb-0 mt-16'>
                    <li> Two 2-hour lectures a week </li>
                    <li> One 1-hour lectures a week </li>
                    <li> Private executive channel to contact us directly for quick response and work with you more directly </li>
                    <li> <b><u>TEN</u></b> 1-1 hour session for the 10 weeks</li>
                  </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Payment.propTypes = propTypes
Payment.defaultProps = defaultProps

export default Payment
