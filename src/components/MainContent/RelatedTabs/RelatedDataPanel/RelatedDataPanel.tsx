import React from 'react';
import { Link } from 'react-router-dom'
import { ResultList } from '../../FilmMainContent/dataListService';
import styles from './RelatedDatapanel.module.css'
import imageBGPlaceHolder from '../../../../assets/imagePlaceHolder/SW-ImageNotFound_transparent.png'

/** Props interface */
interface componentProps {
  urlPath?: string,
  contentList: ResultList[],
}

/** Component used in tabs to render individual cards of related character / planet / entity data */
export const RelatedDataPanel: React.FC<componentProps> = ({urlPath, contentList}) => (
  <div className={styles.wrapper}>
    {contentList.map((contentItem) =>
      <Link key={contentItem.id} className={styles.item} to={`/sw-react/${urlPath}/${contentItem.id}`} >

        {/* An entity avatar as a background image */}
        <div
          className={styles.itemPicture}
          style={{
            backgroundImage: `url('${contentItem.image ? contentItem.image : imageBGPlaceHolder}') `,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            overflow: 'hidden',
          }}
        />

        <div className={styles.itemContainer}>
          <div className={styles.itemContent}>
            {/* NOTE: I return a tuple, you should always work with indices [0] and [1] */}
            <div className={styles.itemTitle}>
              <span className={styles.titleValue}>{contentItem.title[1]}</span>
            </div>

            {contentItem.subTitle && (
              <div className={styles.itemSubTitle}>
                <p className={styles.subTitle}>{contentItem.subTitle[0]}</p>
                <span className={styles.subTitleValue}>{contentItem.subTitle[1]}</span>
              </div>
            )}
          </div>
        </div>
      </Link>)}
  </div>
)