import React from 'react';

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                <h1>test repo test</h1>
                <div>{children}</div>
            </body>
        </html>

    );
};

export default RootLayout;