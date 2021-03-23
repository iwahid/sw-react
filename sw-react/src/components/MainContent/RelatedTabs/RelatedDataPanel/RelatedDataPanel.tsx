import React from 'react';/* 
import styles from './FilmMainContent.module.css' */
import { Link } from 'react-router-dom'
import styles from './RelatedDatapanel.module.css'
import { IResultList } from '../../FilmMainContent/dataListService';

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

        {/* Аватар в виде фонового изображения */}
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
            {/* NOTE: я же возвращаю кортеж, всегда нужно работать с индексами [0] и [1] */}
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