import { majorScale, Pane } from 'evergreen-ui';

// View is an extremely simple component to make sure that the layout is consistent
export default function HubView({ children }) {
    return (
        <Pane
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            paddingTop={majorScale(5)}
        >
            <Pane
                width="100%"
                maxWidth="1200px"
                paddingX={majorScale(5)}
            >
                { children }
            </Pane>
        </Pane>
    );
}