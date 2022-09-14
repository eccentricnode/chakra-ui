import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { PostProps } from "../../components/Post";

import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};

const BlogPost: NextPage<PostProps> = (props) => {
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Austin Johnson - {title}</title>
      </Head>
    </Layout>
  );
};
