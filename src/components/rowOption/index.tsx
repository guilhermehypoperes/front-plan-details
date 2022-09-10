import { Box, Divider, Row } from '@telefonica/mistica';
import { useRouter } from 'next/router';
interface RowOptionProps {
  title: string;
  divider?: boolean;
  route?: string;
}
export function RowOption({ title, divider, route }: RowOptionProps) {
  const router = useRouter();

  const navigateToPage = () => {
    route && router.push(route);
  };
  return (
    <>
      <Row title={title} onPress={navigateToPage} />
      <Box paddingX={16}>{divider && <Divider />}</Box>
    </>
  );
}
