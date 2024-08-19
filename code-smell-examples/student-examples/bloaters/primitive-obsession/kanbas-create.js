import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';

export default function AssignmentEditor() {
  const { id, aid } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const assignment = {
    id: 1,
    title: 'NodeJS Assignment',
    description: 'Create a NodeJS server with ExpressJS',
    due: '2021-10-10',
    completed: false,
    score: 0,
  };

  const handleSave = () => {
    if (aid) {
      dispatch(
        updateAssignment({
          ...assignment,
          title,
          description,
          points,
          due,
          available,
          until,
        })
      );
    } else {
      dispatch(
        addAssignment({
          title,
          description,
          points,
          due,
          available,
          until,
          course: id,
        })
      );
    }
    navigate(`/Kanbas/Courses/${id}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${id}/Assignments`);
  };

  return aid ? handleSave() : handleCancel();
}
