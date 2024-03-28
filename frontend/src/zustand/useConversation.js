import {create} from 'zustand';

const useConversation = create((set) => ({
    // global state
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages) => set({messages}),
}));

export default useConversation;