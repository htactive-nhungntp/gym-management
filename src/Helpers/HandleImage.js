


  const handleUpload = (e,state) => {
    e.preventDefault();
    let storage = ""
    const { img } = state;
    const uploadImage = this.storage.ref(`images/${img.name}`).put(img);
    uploadImage.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
     storage = this.storage
          .ref("images")
          .child(img.name)
          .getDownloadURL()
        //   .then(url => {
        //     this.addMember(url);
        //   });
      }
    );
    return storage
  };


