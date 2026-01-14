import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { X, Mail, Award, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface BoardMember {
  id: string;
  name: string;
  title: string;
  credentials?: string;
  bio: string;
  joinedYear: number;
  expertise: string[];
  imageUrl?: string;
}

interface BoardMemberModalProps {
  member: BoardMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BoardMemberModal({ member, isOpen, onClose }: BoardMemberModalProps) {
  if (!member) return null;

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden border-border/50 rounded-sm shadow-elegant-lg" data-testid="modal-board-member">
        <div className="relative">
          <div className="absolute inset-0 h-32 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10" />
          
          <div className="relative px-8 pt-8 pb-6">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Avatar className="w-28 h-28 border-4 border-background shadow-elegant rounded-sm">
                  {member.imageUrl ? (
                    <AvatarImage src={member.imageUrl} alt={member.name} className="object-cover" />
                  ) : null}
                  <AvatarFallback className="text-2xl font-display bg-muted text-muted-foreground rounded-sm">
                    {initials}
                  </AvatarFallback>
                </Avatar>
              </motion.div>
              
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex-1 pt-4"
              >
                <DialogHeader className="text-left space-y-1">
                  <DialogTitle className="heading-stately text-2xl md:text-3xl text-foreground" data-testid="text-member-name">
                    {member.name}
                  </DialogTitle>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-accent font-medium text-sm">{member.title}</span>
                    {member.credentials && (
                      <>
                        <span className="text-muted-foreground/40">·</span>
                        <span className="text-muted-foreground text-sm">{member.credentials}</span>
                      </>
                    )}
                  </div>
                </DialogHeader>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="px-8 pb-8 space-y-6"
          >
            <div className="divider-elegant" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm">Board member since {member.joinedYear}</span>
              </div>
              
              <p className="text-refined text-muted-foreground leading-relaxed" data-testid="text-member-bio">
                {member.bio}
              </p>
            </div>
            
            {member.expertise.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" />
                  <span className="label-elegant">Areas of Expertise</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="rounded-sm font-normal text-xs bg-muted/50 hover:bg-muted"
                      data-testid={`badge-expertise-${index}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface BoardMemberCardProps {
  member: BoardMember;
  onClick: () => void;
  index: number;
}

export function BoardMemberCard({ member, onClick, index }: BoardMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group w-full text-left card-stately rounded-sm p-6 transition-all duration-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      data-testid={`button-board-member-${index}`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-5">
          <Avatar className="w-20 h-20 border-2 border-border/50 group-hover:border-primary/30 transition-colors duration-500 rounded-sm">
            {member.imageUrl ? (
              <AvatarImage src={member.imageUrl} alt={member.name} className="object-cover" />
            ) : null}
            <AvatarFallback className="text-lg font-display bg-muted group-hover:bg-primary/10 text-muted-foreground group-hover:text-primary transition-colors duration-500 rounded-sm">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <motion.div
            className="absolute inset-0 rounded-sm"
            initial={false}
            animate={{
              boxShadow: isHovered 
                ? "0 0 0 2px hsl(var(--primary) / 0.2), 0 8px 24px -8px hsl(var(--primary) / 0.3)" 
                : "0 0 0 0px transparent, 0 0 0 0px transparent"
            }}
            transition={{ duration: 0.4 }}
          />
        </div>
        
        <div className="space-y-1">
          <p className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors duration-300" data-testid={`text-board-member-${index}`}>
            {member.name}
          </p>
          <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
            {member.title}
          </p>
        </div>
        
        <motion.div
          className="mt-4 text-xs text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
          initial={false}
          animate={{ y: isHovered ? 0 : 4 }}
        >
          <span>View profile</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.button>
  );
}
