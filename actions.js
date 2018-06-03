import { 
    NativeModules,
    NativeEventEmitter,
} from 'react-native';

const _RNCallKit = NativeModules.RNCallKit;
const _RNCallKitEmitter = new NativeEventEmitter(_RNCallKit);

const RNCallKitDidReceiveStartCallAction = 'RNCallKitDidReceiveStartCallAction';
const RNCallKitPerformAnswerCallAction = 'RNCallKitPerformAnswerCallAction';
const RNCallKitPerformEndCallAction = 'RNCallKitPerformEndCallAction';
const RNCallKitDidActivateAudioSession = 'RNCallKitDidActivateAudioSession';
const RNCallKitDidDisplayIncomingCall = 'RNCallKitDidDisplayIncomingCall';
const RNCallKitDidPerformSetMutedCallAction = 'RNCallKitDidPerformSetMutedCallAction';

didReceiveStartCallAction = handler => {
    const listener = _RNCallKitEmitter.addListener(
        RNCallKitDidReceiveStartCallAction,
        (data) => { handler(data);}
    );
    _RNCallKit._startCallActionEventListenerAdded();
    return listener;
}

answerCall = handler => {
    return _RNCallKitEmitter.addListener(
        RNCallKitPerformAnswerCallAction,
        (data) => { handler(data);}
    );
}

endCall = handler => {
    return _RNCallKitEmitter.addListener(
        RNCallKitPerformEndCallAction,
        (data) => { handler(data); }
    );
}

didActivateAudioSession = handler => {
    return _RNCallKitEmitter.addListener(
        RNCallKitDidActivateAudioSession,
        () => { handler(); }
    );
}

didDisplayIncomingCall = handler => {
    return _RNCallKitEmitter.addListener(
        RNCallKitDidDisplayIncomingCall,
        (data) => { handler(data.error); }
    );
}

didPerformSetMutedCallAction = handler => {
    return _RNCallKitEmitter.addListener(
        RNCallKitDidPerformSetMutedCallAction,
        (data) => { handler(data.muted); }
      );
}

export const listeners = { 
    didReceiveStartCallAction: didReceiveStartCallAction,
    answerCall: answerCall,
    endCall: endCall,
    didActivateAudioSession: didActivateAudioSession,
    didDisplayIncomingCall: didDisplayIncomingCall,
    didPerformSetMutedCallAction: didPerformSetMutedCallAction,
};

