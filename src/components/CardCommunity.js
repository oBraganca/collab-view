import React from "react";

import Card from './Card';
import {Button, Form} from "react-bootstrap";
import topHeader2 from "../assets/images/dashboard/top-header2.png";
import photo from "../assets/images/avatars/avtar_2.png";

const CardCommunity = (props) => {
    return (
        <div>
            <Card>
                <Card.Header>
                    <img className="community-card-background" src={topHeader2} width={270}/>
                    <img className="community-card-photo" src={photo} width={90}/>
                </Card.Header>
                <Card.Body>
                    <h4>
                        {props.communityName}
                    </h4>
                    <p>
                        *icon*
                        {props.numberOfPosts} Posts
                    </p>
                    <p>
                        *icon*
                        Members {props.numberOfMembers}
                    </p>
                </Card.Body>
                <Card.Footer>
                    *members photos*
                    <Button variant="outline-danger">Leave Community</Button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CardCommunity;