import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';

function Sidebar() {
    return (
        <div className="w-64 bg-gray-800 overflow-y-auto">
            <List>
                {[
                    { icon: <HomeIcon />, text: 'Home' },
                    { icon: <ExploreIcon />, text: 'Explore' },
                    { icon: <SubscriptionsIcon />, text: 'Subscriptions' },
                    { icon: <VideoLibraryIcon />, text: 'Library' },
                    { icon: <HistoryIcon />, text: 'History' }
                ].map((item, index) => (
                    <ListItem key={index} button className="hover:bg-gray-700">
                        <ListItemIcon className="text-gray-400">{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} className="text-gray-200" />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Sidebar;
