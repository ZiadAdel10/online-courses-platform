import { type NextPage } from "next";
import Head from "next/head";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import {
  ActionIcon,
  AppShell,
  Button,
  Group,
  Header,
  Navbar,
  useMantineColorScheme,
} from "@mantine/core";

const Home: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Button>Hello World</Button> */}
        <AppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              GG
            </Navbar>
          }
          header={
            <Header height={60} p="xs">
              <Group sx={{ height: "100%" }} px={20} position="apart">
                X
                <ActionIcon
                  variant="default"
                  onClick={() => toggleColorScheme()}
                  size={30}
                >
                  {colorScheme === "dark" ? (
                    <IconSun size="1rem" />
                  ) : (
                    <IconMoonStars size="1rem" />
                  )}
                </ActionIcon>
              </Group>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          HELLO
        </AppShell>
      </main>
    </>
  );
};

export default Home;
