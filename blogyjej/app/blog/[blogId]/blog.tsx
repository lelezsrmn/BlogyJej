import React from 'react';

const Blog = ({
                  params,
                  searchParams,
              }: {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const user = await prisma.User.findMany({});
    return (
        <div>
            <p key={}>Search</p>
        </div>
    );
};

export default Blog;