import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen  from '..//screens/Splash/SplashScreen';
import HomeScreen from '../screens/Home/Home';
import ArticleScreen from '../screens/Article/Article';
import SearchResultScreen from '../screens/SearchResult/SearchResult';
import SearchScreen from '../screens/Search/Search';
import ErrorScreen from '../screens/Error/Error';
import WebViewScreen from '../screens/WebView';

const Stack = createNativeStackNavigator();

const Root = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{
                headerShown: false
                }}>   
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="SearchResult" component={SearchResultScreen} />
                <Stack.Screen name="Error" component={ErrorScreen} />
                <Stack.Screen name="Article" component={ArticleScreen} />
                <Stack.Screen name="View" component={WebViewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;
