import { Job } from "../models/job.model.js";

//create a job (for company or Admin)
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Please fill all the fields",
                success: false
            });
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });

        return res.status(201).json({
            message: "Job posted successfully",
            job,
            success: true
        });

    } catch (error) {
        console.log(error);        
    }
}

//get all jobs (search for students)
export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || ""; //search keyword
        const query = {
            $or: [
                {title: {$regex: keyword, $options: "i"}},          //i is for case insensitive search
                {description: {$regex: keyword, $options: "i"}},   
            ]
        };
        
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createdAt: -1 }); //sort by createdAt field in descending order

        if (!jobs) {
            return res.status(404).json({
                message: "No jobs found",
                success: false
            });
        };
        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.log(error);        
    }
}

//get job by id (for student)
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        });
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        };
        return res.status(200).json({
            job,
            success: true
        });

    } catch (error) {
        console.log(error);        
    }
}

//Jobs posted by company or admin
export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id; //logged in admin id
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "No jobs found",
                success: false
            });
        };
        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        console.log(error);        
    }
}