import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#15213c'
  },
  notecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#a5c3d1',
    borderRadius: 8,
    marginBottom: 10
  },
  notecontent: {
    flex: 1
  },
  notetitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black'
  },
  note: {
    fontSize: 20,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    fontSize: 25,
    color: 'white',
    backgroundColor: 'dark'
  },
  bottombuttons: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottombutton: {
    backgroundColor: '#b8fbbf',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 50
  },
  bottombuttontext: {
    color: 'black',
    width: 35,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});