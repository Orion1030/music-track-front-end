import React, { useEffect, useState } from 'react';
import { Empty, Skeleton } from 'antd';
import { CoverImage, StyledImageContainer } from '~/styles/style';

export const CoverImageContent = ({ url, isLoading }: { url: string|undefined, isLoading: boolean }) => {

  return <StyledImageContainer>{isLoading ? <Skeleton.Image active /> : url ? <CoverImage src={url} alt="Cover" /> : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No Cover" />}</StyledImageContainer>;
}
