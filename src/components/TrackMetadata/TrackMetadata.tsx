import { Card, Tag, Typography, Space, Divider, message, Skeleton, Empty, Row, Col } from 'antd';
import { TrackMetadataContainer, TrackInfo, StyledTitle, StyledMetadata } from '~/styles/style';
import { UserOutlined, FileImageOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Track } from '~/types';
import { CoverImageContent } from '~/components/CoverImageContent';

const { Title, Text } = Typography;

export const TrackMetadata = ({ track, isLoading }: { track: any, isLoading: boolean }) => {
  return ( !track ? (
    <Empty description="No track metadata" />
  ) : <TrackMetadataContainer>
      <Col sm={24} md={12}>
      <Card hoverable style={{ width: '100%' }} >
        <CoverImageContent url={track.coverImage} isLoading={isLoading} />
        {isLoading ? <Skeleton active /> : (
        <Space size="large" align="start">
          <TrackInfo>
            <Space>
              <StyledTitle>{track.name}</StyledTitle>
              {true && <Tag color="red">Explicit</Tag>}
            </Space>
            <ul>
              <ol>
                <Text><UserOutlined /> <span> Artist Name : </span> {track.artistName}</Text>
              </ol>
              <ol>
                <Text><FileImageOutlined /> <span>Album Name : </span>{track.albumName}</Text>
              </ol>
              <ol>
                <Text>
                  <ClockCircleOutlined />
                  <span> Playback : </span>
                  {Math.floor(track.playbackSeconds / 60)}:
                  {(track.playbackSeconds % 60).toString().padStart(2, '0')}
                </Text>
              </ol>
            </ul>
          </TrackInfo>
        </Space>)}
      </Card>
      </Col>
    </TrackMetadataContainer>
  );
}

