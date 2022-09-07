import { Box, Boxed, Stack, Text3, Touchable } from '@telefonica/mistica';
import { useRouter } from 'next/router';

interface cardSmallCarouselProps {
  title: string;
  icon: React.ReactNode;
  route?: string;
}
export function CardSmallCarousel({
  title,
  icon,
  route,
}: cardSmallCarouselProps) {
  const router = useRouter();

  const navigateToPage = () => {
    route && router.push(route);
  };
  return (
    <Touchable onPress={navigateToPage}>
      <Boxed>
        <Box padding={16}>
          <Stack space={16}>
            {icon}
            <Text3 medium>{title}</Text3>
          </Stack>
        </Box>
      </Boxed>
    </Touchable>
  );
}
