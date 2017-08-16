import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  inputGroupTitle: {
    padding: 10,
    width: '100%',
  },
  inputGroupTitleText: {
    textAlign: 'left',
    width: '100%',
    fontSize: 14,
  },
  inputGroupContent: {
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
    borderTopWidth: .5,
    borderStyle: 'solid',
    borderColor: '#d9d9d9',
    borderBottomWidth: .5,
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    height: 50,
    overflow: 'hidden',
    flexDirection: 'row',
    borderTopWidth: .5,
    borderStyle: 'solid',
    borderColor: '#d9d9d9',
  },
  inputHead: {
    justifyContent: 'center',
    width: '100%',
    padding: 15,
    overflow: 'hidden',
    width: 110,
  },
  inputBody: {
    justifyContent: 'center',
    width: '100%',
    padding: 15,
    flex: 1,
    overflow: 'hidden',
  }
});

// .c-input-group {
//   .c-input-group__title {
//     padding: 1rem 0 .5rem 1.5rem;
//   }
//   .c-input-group__content {
//     background: #fff;
//     position: relative;
//     overflow: hidden;
//     &:before {
//       @include borderLine('top');
//     }
//     &:after {
//       @include borderLine('bottom');
//     }
//     &.noborder-top {
//       &:before {
//         border: none !important;
//       }
//     }
//     &.noborder-bottom {
//       &:after {
//         border: none !important;
//       }
//     }
//   }
// }
