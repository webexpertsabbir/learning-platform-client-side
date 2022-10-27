import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2> Q1: what is cors?</h2>
            <p><b>Ans:</b> Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources</p>
            <h2> Q2: Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p><b>Ans:</b> Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            <h2> Q3: How does the private route work?</h2>
            <p><b>Ans:</b> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in.</p>
            <h2> Q4: What is Node? How does Node work?</h2>
            <p><b>Ans:</b> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </div>
    );
};

export default Blog;