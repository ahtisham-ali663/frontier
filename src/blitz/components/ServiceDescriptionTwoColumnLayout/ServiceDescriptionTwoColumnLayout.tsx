import css from './ServiceDescriptionTwoColumnLayout.module.scss'
import clx from 'classnames'
import { Typography } from 'src/blitz'
import { InjectHTML } from 'src/blitz'

const ServiceDescriptionTwoColumnLayout = ({
  image,
  title,
  subtitle,
  className = '',
}: any) => {
  return (
    <>
      <div className={clx(css.root, className)}>
        <div className={css.innerWrapper}>
          <div className={`${css.gridContainer}`}>
            {image && (
              <div className={`${css.gridItem} mob-center`}>
                <div className={css.imgWrapper}>
                  <img
                    className={css.image}
                    src={image?.src}
                    alt={title?.value}
                  />
                </div>
              </div>
            )}
            <div className={`${css.gridItem}`}>
              <div className={css.descriptionWrapper}>
                <Typography tagType="h2" styleType="h1" className={css.title}>
                  {title?.value}
                </Typography>
                <InjectHTML
                  tagType="span"
                  styleType="legal"
                  className={css.subtitle}
                  value={subtitle?.value}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceDescriptionTwoColumnLayout
