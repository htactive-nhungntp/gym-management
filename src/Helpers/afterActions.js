
import Swal from 'sweetalert2';

export const Swaling = (text) => {
    Swal.fire(
        `${text}`,
        'The changes were saved correctly.',
        'success')
}

export const Warning = (text) => {
    Swal.fire({
        type: 'error',
        title: `${text}`,
        text: 'Something went wrong!',
      })
      
}


// export const swalWithBootstrapButtons = Swal.mixin({
//     customClass: {
//       confirmButton: 'btn btn-success',
//       cancelButton: 'btn btn-danger'
//     },
//     buttonsStyling: false,
//   })

//   swalWithBootstrapButtons.fire({
//     title: 'Are you sure?',
//     text: "You won't be able to revert this!",
//     type: 'warning',
//     showCancelButton: true,
//     confirmButtonText: 'Yes, delete it!',
//     cancelButtonText: 'No, cancel!',
//     reverseButtons: true
//   }).then((result) => {
//     if (result.value) {
//       swalWithBootstrapButtons.fire(
//         'Deleted!',
//         'Your file has been deleted.',
//         'success'
//       )
//     } else if (
//       // Read more about handling dismissals
//       result.dismiss === Swal.DismissReason.cancel
//     ) {
//       swalWithBootstrapButtons.fire(
//         'Cancelled',
//         'Your imaginary file is safe :)',
//         'error'
//       )
//     }

