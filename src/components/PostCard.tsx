
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface PostCardProps {
    post: {
        url: string;
        frontmatter: {
            title: string;
            author: string;
            description: string;
            pubDate: string;
            heroImage: string;
        };
    };
}

export default function PostCard({ post }) {
    return (
        <a href={post.url} className="hover:scale-105 transition-all">
            <Card className="overflow-hidden hover:border-2 hover:border-c3">
                <img className="w-full" width={300} height={300} src={post.frontmatter.heroImage} alt={post.frontmatter.title} />
                <CardHeader>
                    <CardTitle>
                        {post.frontmatter.title}
                    </CardTitle>
                    <h4>
                        {post.frontmatter.pubDate}
                    </h4>
                    <h4>
                        Autor: <span className="text-c4 font-bold">{post.frontmatter.author}</span>
                    </h4>
                </CardHeader>
                <CardContent>
                    <p>
                        {post.frontmatter.description}
                    </p>
                </CardContent>
            </Card>
        </a>
    )
}
