import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Avatar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Videos() {
    const [searchQuery, setSearchQuery] = useState('');
    const list = [
        {
            "videoId": "video01",
            "title": "Learn React in 30 Minutes",
            "thumbnailurl": "https://source.unsplash.com/random/360x200?react",
            "description": "A quick tutorial to get started with React.",
            "channelId": "channel01",
            "uploader": "React Master",
            "views": 15200,
            "likes": 1023,
            "dislikes": 45,
            "uploadDate": "2024-09-20",
            "comments": [{ "commentId": "comment01", "userId": "user02", "text": "Great video!", "timestamp": "2024-09-21T08:30:00Z" }]
        },
        {
            "videoId": "video02",
            "title": "JavaScript ES6 Features",
            "thumbnailurl": "https://source.unsplash.com/random/360x200?javascript",
            "description": "Modern JavaScript features explained",
            "channelId": "channel02",
            "uploader": "JS Ninja",
            "views": 25400,
            "likes": 2100,
            "dislikes": 35,
            "uploadDate": "2024-09-18",
            "comments": []
        },
        {
            "videoId": "video03",
            "title": "CSS Grid Tutorial",
            "thumbnailurl": "https://source.unsplash.com/random/360x200?css",
            "description": "Master CSS Grid Layout",
            "channelId": "channel03",
            "uploader": "CSS Wizard",
            "views": 18900,
            "likes": 1500,
            "dislikes": 25,
            "uploadDate": "2024-09-15",
            "comments": []
        },
        {
            "videoId": "video04",
            "title": "Node.js Basics",
            "thumbnailurl": "https://source.unsplash.com/random/360x200?node",
            "description": "Introduction to Node.js",
            "channelId": "channel04",
            "uploader": "Backend Dev",
            "views": 12300,
            "likes": 890,
            "dislikes": 30,
            "uploadDate": "2024-09-10",
            "comments": []
        }
    ]

    const filteredVideos = list.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-4">
            <div className="flex w-full max-w-2xl mx-auto mb-4">
                <div className="flex w-full items-center border border-gray-600 rounded-full px-6 py-1 bg-gray-100">
                    <InputBase
                        placeholder="Search videos..."
                        className="flex-1"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        sx={{
                            input: {
                                color: '#000000',
                                '&::placeholder': {
                                    color: '#666666',
                                    opacity: 1
                                }
                            }
                        }}
                    />
                    <SearchIcon className="text-gray-600" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredVideos.map((video) => (
                    <Card key={video.videoId} className="hover:shadow-lg cursor-pointer bg-gray-800">
                        <CardMedia
                            component="img"
                            height="200"
                            image={video.thumbnailurl}
                            alt={video.title}
                        />
                        <CardContent className="flex">
                            <Avatar className="mr-3" />
                            <div>
                                <Typography variant="subtitle1" className="font-medium text-black">
                                    {video.title}
                                </Typography>
                                <Typography variant="body2" className="text-gray-700">
                                    {video.uploader}
                                </Typography>
                                <Typography variant="body2" className="text-gray-700">
                                    {video.views} views • {new Date(video.uploadDate).toLocaleDateString()}
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}


export default Videos;
