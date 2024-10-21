import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Space, Divider } from 'antd';
import { StyledPage } from '~/styles/style';
import { createTrack, getCover, getTrackMetadata } from '~/api';
import { TrackMetadata } from '~/components/TrackMetadata';
import { SearchBar } from '~/components/SearchBar';
import { RootState } from '~/store';
import { setTrackMetadata, clearTrackMetadata } from '~/store';
const { Title, Text } = Typography;

export const Home = () => {
  const dispatch = useDispatch();
  const [isCreatingTrack, setIsCreatingTrack] = useState(false);
  const trackMetadata = useSelector((state: RootState) => state.store.trackMetadata);
  const _getTrackMetadata = async (isrc: string) => {
    let track = await getTrackMetadata(isrc);
    if(!track) return;
    const album = await getCover(isrc);
    const coverURL = album.coverImage[0].url;
    track.coverImage = coverURL;
    return track;
  }
  const handleCreate = async (isrc: string) =>{
    setIsCreatingTrack(true);
    try {
      const createResponse = await createTrack(isrc);
      if (!createResponse) return;
      const track = await _getTrackMetadata(isrc);
      dispatch(setTrackMetadata(track));
    } catch (error) {
    } finally {
      setIsCreatingTrack(false);
    }
  }
  return (
    <StyledPage>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Search Track</Title>
        <Divider  />
        <SearchBar onSubmit={handleCreate} isLoading={isCreatingTrack} />
        <TrackMetadata track={trackMetadata} isLoading={isCreatingTrack} />
      </Space>
    </StyledPage>
  );
}
