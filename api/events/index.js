import express from 'express';
import Events from '../events/eventModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); // eslint-disable-line

// Get all events, using try/catch to handle errors
router.get('/', async (req, res) => {
  try {
    const event = await Events.find();
    res.status(200).json(event);
  } catch (error) {
    handleError(res, error.message);
  }
});

// Create an event, using async handler
router.post('/', asyncHandler(async (req, res) => {
  const event = await Events.create(req.body);
  res.status(201).json(event);
}));

// Update an event
router.put('/:id', asyncHandler(async (req, res) => {
  if (req.body._id) delete req.body._id;
  const event = await Events.update({
    _id: req.params.id,
  }, req.body, {
    upsert: false,
  });
  if (!event) return res.sendStatus(404);
  return res.json(200, event);
}));

// Delete an event
router.delete('/:id', asyncHandler(async (req, res) => {
  const event = await Events.findById(req.params.id);
  if (!event) return res.send(404);
  await event.remove();
  return res.status(204).send(event);
}));

/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;