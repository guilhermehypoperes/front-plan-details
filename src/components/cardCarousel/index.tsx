import { DataCard } from '@telefonica/mistica';

interface CardCarouselProps {
  title: string;
  description: string;
  extra: string;
}

export default function CardCarousel({
  title,
  description,
  extra,
}: CardCarouselProps) {
  return <DataCard title={title} description={description} extra={extra} />;
}
