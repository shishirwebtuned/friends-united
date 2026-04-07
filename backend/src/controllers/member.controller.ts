import { Member } from "../models/member.model.js";
import { AppError } from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";
import { sendResponse } from "../utils/sendResponse.js";

export const getMembers = catchAsync(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const { paymentStatus, startDate, endDate } = req.query;

  const filter: any = {};

  if (paymentStatus) {
    filter.paymentStatus = paymentStatus;
  }

  if (startDate || endDate) {
    filter.createdAt = {};

    if (startDate) {
      filter.createdAt.$gte = new Date(startDate as string);
    }

    if (endDate) {
      filter.createdAt.$lte = new Date(endDate as string);
    }
  }

  const members =
    (await Member.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean()) || [];

  const total = await Member.countDocuments(filter);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: members.length
      ? "Members Fetched Successfully"
      : "No Members found",
    data: {
      members,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    },
  });
});

export const getMemberById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const members = await Member.findById(id).lean();

  if (!members) throw new AppError("Member not found", 404);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Member Fetched Successfully",
    data: {
      members,
    },
  });
});
