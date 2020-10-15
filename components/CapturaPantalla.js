import {useRef, useState, useCallback, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';

async function GuardarEnAlbum ({captureViewRef, captureOptions, album}) {
    return captureRef(captureViewRef, captureOptions)
    .then(uri => {
        CameraRoll.save(uri, {type: "photo", album}).then(
            console.log,
            console.error
        );
    })
    .catch(error => console.error("Captura Fallida", error));
}

function alertUserAboutSettings() {
    alert(
        "Desactivaste esta funcionalidad. Por favor ir a Settings > Applications y otorgar permisos de almacenamiento "
    );
}

function usePermissionDialog({
    onPermissionGranted,
    onPermissionDenied = () => {},
    onPermissionDeniedForEver = () => {},
    onActionNotAccessible = () => {}
}) {
    const [shouldAskForPermission, setShouldAskForPermissionFlag] = useState(false);
    const [permissionState, setPermissionState] = useState(PermissionsAndroid.RESULTS.DENIED);

    useEffect (() => {
        (async function askPermission() {
            if (!shouldAskForPermission) {
                return;
            }
            
            setShouldAskForPermissionFlag(false);

            const alreadyGranted =
            permissionState === PermissionsAndroid.RESULTS.GRANTED ||
            (await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            ));

            if (
                !alreadyGranted &&
                permissionState === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
            ) {
                onActionNotAccessible();
                return;
            }

            if (alreadyGranted) {
                onPermissionGranted();
                return;
            }

            const newState = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            );

            if (newState === PermissionsAndroid.RESULTS.GRANTED) {
                onPermissionGranted();
            } else if (newState === PermissionsAndroid.RESULTS.DENIED) {
                onPermissionDenied();
            } else {
                onPermissionDeniedForEver();
            }

            setPermissionState(newState);
        })();
    }, [
        permissionState,
        shouldAskForPermission,
        onPermissionGranted,
        onPermissionDenied,
        onPermissionDeniedForEver,
        onActionNotAccessible
    ]);

    return {
        setShouldAskForPermissionFlag
    };
}

function useCapture ({
    album = null,
    outputOptions,
    onActionNotAccessible = alertUserAboutSettings
} = {}) {
    const captureViewRef = useRef(null);
    const captureOptions = useRef({
        format: "jpg",
        quality: 0.9,
        ...outputOptions
    });

    //guardar
    const saveCapture = () => {
        return GuardarEnAlbum({
            album,
            captureViewRef,
            captureOptions
        });
    };

    //llamar
    const {setShouldAskForPermissionFlag} = usePermissionDialog({
        onPermissionGranted: saveCapture,
        onActionNotAccessible
    });

    //evento de usuario
    const onSaveCapture = useCallback(() => {
        setShouldAskForPermissionFlag(true);
    }, [setShouldAskForPermissionFlag]);

    return {
        captureViewRef,
        onSaveCapture
    };
}

export {useCapture};

// class CapturarPantalla extends Component {
//     constructor(props){
//         super(props);
//     }

//     Capturar = uri => {
//         console.log("Guardada correctamente", uri);
//         this.props.func(uri);
//     }

//     render() {
//         return (
//             <ViewShot Capturar={this.Capturar} captureMode="mount">
//                 <Text>...Algo...</Text>
//             </ViewShot>
//         );
//     }
// }

// export default CapturarPantalla;





// function useCapture () {
//     const captureViewRef = useRef();

//     function CapturaPantalla () {
//         captureRef(captureViewRef, {
//             format: 'jpg',
//             quality: 0.9
//         })
//         .then(
//             uri => console.log("Imagen guardada temporalmente", uri),
//             error => console.error("Hay error", error)
//         );
//     }

//     return {
//         captureViewRef,
//         CapturaPantalla
//     };
// }

// function MiComponente() {
//     const {captureViewRef, CapturaPantalla} = useCapture();

//     return(
//         <>
//         <View ref={captureViewRef}> <Text> Contenido </Text> </View>
//         <Button title="Guardar" onPress={CapturaPantalla}/>
//         </>
//     );
// }