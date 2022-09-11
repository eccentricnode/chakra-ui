import db from '../../utils/db'

export default async (req, res) => {
    try {
        const blogs = await db.collection('blogs').orderBy('created').get();
        const blogsData = blogs.docs.map(blog => ({
            id: blog.id,
            ...blog.data()
        }));
        res.status(200).json({ blogsData });
    } catch (e) {
        res.status(400).end();
    }
}