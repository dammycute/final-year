const EditProfileForm = () => {
  return (
    <form>
      <div className="flex gap-8 mb-8">
        <div className="form-data">
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder="Yash" />
        </div>
        <div className="form-data">
          <label htmlFor="">Last Name</label>
          <input type="text" placeholder="Ghori" />
        </div>
      </div>
      <div className="flex gap-6">
        <div className="form-data">
          <label htmlFor="designation">Designation</label>
          <select id="designation">
            <option>UI Intern</option>
            <option>Develper</option>
            <option>Designer</option>
            <option>Engineer</option>
          </select>
        </div>
        <div className="form-data">
          <label htmlFor="nationality">Nationality</label>
          <select id="nationality">
            <option>India</option>
            <option>Nigeria</option>
            <option>US</option>
            <option>Bangladesh</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default EditProfileForm;
