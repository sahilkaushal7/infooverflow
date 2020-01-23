import * as React from 'react';
import cn from 'classnames';
import { Blog } from '../../../../app/types';
import ReactHtmlParser from 'react-html-parser';

interface IOBlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  blog: Blog;
  className?: string;
}

export const IOBlogCard: React.FC<IOBlogCardProps> = ({ blog: {
  title,
  user,
  description,
  image,
}, className }) => {
  return (
    <div className={cn('io-card', 'io-blog-card', className)}>
      <div>
        <img src={image} alt={'blog-profile'}/>
      </div>
      <b>{title}</b>
      <b>{user.name}</b>
      <p>{ReactHtmlParser(description)}</p>
    </div>
  )
}
