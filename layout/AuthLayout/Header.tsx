import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      justifyContent="center"
      align="center"
      w="full"
    >
      <Flex w="full" px="20px" py="24px" justifyContent="center" align="center">
        <Flex align="center" w="1192px" justifyContent="space-between">
          <Box>
            <Image
              src="/assets/Asset 3.png"
              alt="logo"
              width="152px"
              height="48px"
              objectFit="contain"
            />
          </Box>

          <Flex align="center" gap="40px">
            <Text fontWeight={500} color="#444648">
              Rent a car
            </Text>
            <Image
              src="/assets/notification.jpg"
              w="24px"
              h="24px"
              objectFit="contain"
            />
            <Image
              src="/assets/pfp.jpg"
              w="32px"
              h="32px"
              objectFit="contain"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;