import React from 'react';
import { Link } from 'react-router-dom'
import { IResultList } from '../../FilmMainContent/dataListService';
import styles from './RelatedDatapanel.module.css'
import imageBGPlaceHolder from '../../../../assets/imagePlaceHolder/SW-ImageNotFound_transparent.png'

/** Props interface */
interface IProps {
  urlPath?: string,
  contentList: IResultList[],
}

export const RelatedDataPanel: React.FC<IProps> = props => (
  <div className={styles.wrapper}>
    {props.contentList.map((contentItem) =>
      <Link key={contentItem.id} className={styles.item} to={`/${props.urlPath}/${contentItem.id}`} >

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