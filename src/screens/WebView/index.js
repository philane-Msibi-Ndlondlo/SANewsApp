import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView} from 'react-native-webview';
import { StatusBar } from 'expo-status-bar'; 
import Colors from '../../configs/colors';

const ViewScreen = ({ route }) => {

    const { url } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" backgroundColor={Colors.black} />
            <WebView style={styles.container} source={{uri: url }} />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: Colors.black,
    }
});

export default ViewScreen;
