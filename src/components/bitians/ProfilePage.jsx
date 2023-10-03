import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faUniversity } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import profile from "../../../assets/shinchan.jpg";
import { Card, CardContent, Typography } from '@mui/material';

function ProfilePage() {
  return (

      <div className="w-full md:w-3/4 px-4 mx-auto">
        <Card className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16 bg-transparent">
          <CardContent className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 flex justify-center">
                <div className="relative">
                  <Image
                    alt="..."
                    src={profile}
                   
                    className="rounded-lg w-48 h-56"
               
                  />
                </div>
              </div>
              <div className="w-full px-4 text-center mt-6">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-white">
                      22
                    </span>
                    <span className="text-sm text-white">Friends</span>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-white">
                      10
                    </span>
                    <span className="text-sm text-white">Photos</span>
                  </div>
                  <div className="lg:mr-4 p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-white">
                      89
                    </span>
                    <span className="text-sm text-white">Comments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Typography variant="h6" className="text-white mb-2">
                Jenna Stones
              </Typography>
              <div className="text-sm text-white font-bold uppercase flex items-center justify-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg" />
                Los Angeles, California
              </div>
              <div className="mb-2 text-white mt-10">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-lg" />
                Solution Manager - Creative Tim Officer
              </div>
              <div className="mb-2 text-white">
                <FontAwesomeIcon icon={faUniversity} className="mr-2 text-lg" />
                University of Computer Science
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <Typography variant="body1" className="mb-4 text-lg leading-relaxed text-white">
                    An artist of considerable range, Jenna the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy
                    writes, performs and records all of his own music,
                    giving it a warm, intimate feel with a solid groove
                    structure. An artist of considerable range.
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
     
  
  );
}

export default ProfilePage;
