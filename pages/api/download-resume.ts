import type { NextApiRequest, NextApiResponse } from 'next';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

type ResponseData = {
    error?: string;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        // Only allow GET requests
        if (req.method !== 'GET') {
            return res.status(405).json({ error: 'Method not allowed' });
        }

        const filePath = join(process.cwd(), 'public', 'assets', 'documents', 'resume.pdf');
        
        // Check if file exists
        if (!existsSync(filePath)) {
            return res.status(404).json({ error: 'Resume file not found' });
        }

        const fileStream = createReadStream(filePath);
        
        // Set appropriate headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=Rohit_Sharma_Resume.pdf');
        
        // Stream the file
        fileStream.pipe(res);

        // Handle stream errors
        fileStream.on('error', (error) => {
            console.error('Stream error:', error);
            res.status(500).json({ error: 'Failed to stream file' });
        });

    } catch (error) {
        console.error('Download error:', error);
        res.status(500).json({ error: 'Failed to download resume' });
    }
} 