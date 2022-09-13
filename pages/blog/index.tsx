import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import { PostProps } from "../../components/Post";
import prisma from "../../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    });

    return {
        props: { feed },
        revalidate: 10
    };
};

type Props = {
    feed: PostProps[]
}

const Blog: NextPage<> = () => {
    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width" />
                <title>Austin Johnson - Blog</title>
            </Head>
            <div className=""></div>    
        </Layout>
    );
}

export default Blog;