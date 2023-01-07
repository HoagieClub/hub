import { useState, useEffect } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
    RadioGroup, Text, Heading, Pane, majorScale, Spinner, Button, Alert,
} from 'evergreen-ui'
import { useRouter } from 'next/router';
import Link from 'next/link';
import View from '../components/View';

export default withPageAuthRequired(() => {
    const { user, isLoading } = useUser();
    if (isLoading) { return <Spinner /> }


    return (
        <View>
            <Pane paddingTop={16}>
                <Heading>App Content</Heading>
            </Pane>
        </View>
    );
})
