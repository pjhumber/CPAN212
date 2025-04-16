import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { supabase } from '../supabase';
import { useDispatch } from 'react-redux';
import { fetchnotes } from '../store/notes';
import { styles } from '../css';

export default function Editor() {
  const navigation = useNavigation();
  const route = useRoute();
  const existingnote = route.params?.note;
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (existingnote) {
      settitle(existingnote.title);
      setcontent(existingnote.content);
    }
  }, [existingnote]);

  const handlesave = async () => {
    if (existingnote) {
      await supabase.from('notes').update({ title, content }).eq('id', existingnote.id);
    } else {
      await supabase.from('notes').insert({ title, content, deleted: false });
    }

    dispatch(fetchnotes());
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }]
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={title}
        onChangeText={settitle}
      />
      <TextInput
        placeholder="Content"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={content}
        onChangeText={setcontent}
        multiline
      />
      <Button title="Save" onPress={handlesave} />
    </View>
  );
}
