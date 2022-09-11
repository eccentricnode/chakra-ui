import db from '../../../utils/db'

export default async (req, res) => {
    try {
        const { slug } = req.body;
        const blogs = db.collection('blogs').get();
        const blogsData = blogs.docs.map(blog => blog.data());

        if (blogsData.some(blog => blog.slug === slug)) {
            res.status(400).end();
        } else {
            const { id } = await db.collection('blogs').add({
                ...req.body,
                created: new Date().toISOString(),
            });
            res.status(200).json({ id });
        }
    } catch (e) {
        res.status(400).end();
    }
}