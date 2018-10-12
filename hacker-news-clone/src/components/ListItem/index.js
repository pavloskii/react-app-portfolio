import React from 'react';
import { Item, Title, Host, ExternalLink, Description, CommentLink } from './styles';

const LINK_REL = "noopener noreferrer nofollow";

const ListItem = (props) => {
    return (
        <Item>
            <ExternalLink>
                <Title>The Developer Community<Host>(github.com)</Host></Title>
            </ExternalLink>
            <Description>
                9000 points by {' '}
                <CommentLink href="#" rel={LINK_REL} target="_blank">
                    TestUser
                </CommentLink>
                {' '} 1 hour ago {' | '}
                <CommentLink href="#" rel={LINK_REL} target="_blank">
                    42 Comments
                </CommentLink>
            </Description>
        </Item>
    )
}

export default ListItem;
