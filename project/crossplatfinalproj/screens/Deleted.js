import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchdeleted } from '../store/notes';
import { styles } from '../css';

export default function Deleted() {
  const dispatch = useDispatch();
  const deletednotes = useSelector(state => state.notes.deleted);

  useEffect(() => {
    dispatch(fetchdeleted());
  }, [dispatch]);

  const rendernote = ({ item }) => (
    <View style={styles.notecontainer}>
      <View style={styles.notecontent}>
        <Text style={styles.notetitle}>{item.title}</Text>
        <Text style={styles.note}>{item.content}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={deletednotes}
        keyExtractor={item => item.id}
        renderItem={rendernote}
      />
    </View>
  );
}