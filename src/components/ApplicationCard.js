import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const CardItem = styled.div``;

const Button = styled.button``;

export default function ApplicationCard({ application, appUrlPath }) {
    return (
         <CardItem>
            {/* https://v5.reactrouter.com/web/api/Link */}
            <Link
                // to
                // https://v5.reactrouter.com/web/api/Link/to-string
                to={`${appUrlPath}${parseInt(application.id, 10)}`}
                // state
                // https://v5.reactrouter.com/web/api/location
                state={{ application }}
                >
                <Button>
                    {application.name}
                </Button>
            </Link>
        </CardItem>
    );
}