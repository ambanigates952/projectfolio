import { createReadStream } from 'fs';
import { join } from 'path';

export default function handler(req, res) {
    const filePath = join(process.cwd(), 'public', 'assets', 'documents', 'resume.pdf');
    const fileStream = createReadStream(filePath);
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Rohit_Sharma_Resume.pdf');
    
    fileStream.pipe(res);
} 