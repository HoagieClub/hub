import { Button, majorScale, Pane, Text } from 'evergreen-ui';

// View is an extremely simple component to make sure that the layout is consistent
export default function DirectoryCard({}) {
    return (
        <Pane
            marginRight={majorScale(4)}
            backgroundColor="white"
            height={majorScale(50)}
            width={majorScale(50)}
            borderRadius={majorScale(1)}
            display="flex"
            flexDirection="column"
        >
            <Pane flex="2" padding={16} textAlign="center">
                Image would go here probably
            </Pane>
            <Pane flex="2" padding={16} textAlign="center">
                <Text 
                    fontWeight="700" 
                    fontSize={majorScale(3)}
                    lineHeight="2"
                >
                    Profile Name
                    <br />
                </Text>
                <Text 
                    fontSize={majorScale(2)}
                    lineHeight="2"
                >
                    Major - Class Year <br />
                    Residential Colllege <br />
                </Text>
                <br />
                <Button 
                    appearance='primary'
                    size="large"
                >
                    Connect
                </Button>
            </Pane>
        </Pane>
    );
}